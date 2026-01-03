const Contact = require('../models/Contact.model');

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    const { source, requestId, ipAddress, userAgent } = req.meta;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
      source,
      requestId,
      ipAddress,
      userAgent,
    });

    res.status(201).json({
      success: true,
      message: 'Contact saved successfully',
      data: contact._id,
    });
  } catch (error) {
    next(error);
  }
};
