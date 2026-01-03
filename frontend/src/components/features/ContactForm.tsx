import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import axios from 'axios';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s\-+()]*$/, "Invalid phone number format")
    .max(20, "Phone must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof FormErrors;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post(
        "https://drug-rx-task-backend.vercel.app/api/contact",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ Axios success (2xx only)
      setIsSubmitted(true);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);

    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description:
          error?.response?.data?.message ||
          error.message ||
          "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Full Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email Address <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Phone Number <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (234) 567-890"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle size={20} />
            Message Sent!
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
