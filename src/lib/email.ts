'use server';

import nodemailer from 'nodemailer';

// Create a secure transporter with environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'amanrck69@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'dxkkdhssuxqhjcms',
  },
});

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'amanrck69@gmail.com',
      to: process.env.EMAIL_USER || 'amanrck69@gmail.com',
      subject: `Contact Form: Message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <h3 style="margin-top: 20px;">Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send your message. Please try again later.',
    };
  }
}