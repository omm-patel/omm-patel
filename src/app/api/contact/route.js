import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables.
const resend = new Resend(process.env.RESEND_API_KEY);

function generateContactEmailHtml({ name, email, subject, message }) {
  const escapeHtml = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Contact Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111111; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; border: 1px solid #e5e5e5; background-color: #ffffff; padding: 32px; box-sizing: border-box;">
          
          <!-- Header -->
          <tr>
            <td style="padding-bottom: 20px;">
              <div style="font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #666666; margin-bottom: 6px;">
                OM PATEL
              </div>
              <div style="font-size: 22px; font-weight: 500; color: #111111; letter-spacing: -0.5px;">
                Portfolio Contact Submission
              </div>
            </td>
          </tr>

          <!-- Subtle Divider -->
          <tr>
            <td style="border-bottom: 1px solid #e5e5e5; padding-bottom: 0;"></td>
          </tr>

          <!-- Email Content Cards -->
          <tr>
            <td style="padding-top: 24px; padding-bottom: 8px;">
              
              <!-- Name Card -->
              <div style="padding: 14px 16px; background-color: #fafafa; border: 1px solid #e5e5e5; margin-bottom: 12px;">
                <div style="font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #666666; margin-bottom: 4px;">
                  Name
                </div>
                <div style="font-size: 14px; color: #111111; font-weight: 500;">
                  ${safeName}
                </div>
              </div>
              
              <!-- Email Card -->
              <div style="padding: 14px 16px; background-color: #fafafa; border: 1px solid #e5e5e5; margin-bottom: 12px;">
                <div style="font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #666666; margin-bottom: 4px;">
                  Email
                </div>
                <div style="font-size: 14px; color: #111111; font-weight: 500;">
                  <a href="mailto:${safeEmail}" style="color: #111111; text-decoration: underline;">${safeEmail}</a>
                </div>
              </div>

              <!-- Subject Card -->
              <div style="padding: 14px 16px; background-color: #fafafa; border: 1px solid #e5e5e5; margin-bottom: 12px;">
                <div style="font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #666666; margin-bottom: 4px;">
                  Subject
                </div>
                <div style="font-size: 14px; color: #111111; font-weight: 500;">
                  ${safeSubject}
                </div>
              </div>

            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding-top: 4px; padding-bottom: 24px;">
              <div style="padding: 18px 16px; background-color: #fafafa; border: 1px solid #e5e5e5;">
                <div style="font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #666666; padding-bottom: 10px; margin-bottom: 12px; border-bottom: 1px solid #e5e5e5;">
                  Message
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #111111;">
                  ${safeMessage}
                </div>
              </div>
            </td>
          </tr>

          <!-- Subtle Divider -->
          <tr>
            <td style="border-top: 1px solid #e5e5e5; padding-top: 24px;"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="font-size: 12px; line-height: 1.5; color: #666666;">
              <div style="margin-bottom: 6px;">
                This inquiry was submitted through the Om Patel Portfolio website.
              </div>
              <div>
                <strong>Email:</strong> <a href="mailto:om07674@gmail.com" style="color: #666666; text-decoration: underline;">om07674@gmail.com</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message || subject.trim().length < 3) {
      return NextResponse.json(
        { error: 'Name, email, subject (min 3 characters), and message are required fields.' },
        { status: 400 }
      );
    }

    const mailSubject = subject.trim();
    const emailText = `Name:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${mailSubject}\n\nMessage:\n${message}`;
    const emailHtml = generateContactEmailHtml({
      name,
      email,
      subject: mailSubject,
      message,
    });

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'om07674@gmail.com',
      subject: mailSubject,
      text: emailText,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend email sending failed:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.',
      data,
    });
  } catch (err) {
    console.error('Contact API endpoint error:', err);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
