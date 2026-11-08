const inquiries: any[] = [];

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    return res.status(200).json({
      count: inquiries.length,
      inquiries: inquiries.slice(-20),
    });
  }

  if (req.method === 'POST') {
    const { fullName, companyName, email, phone, inquiryType, message } = req.body || {};

    if (!fullName || !phone || !email || !message) {
      return res.status(400).json({
        error: 'Missing required inquiry fields: fullName, phone, email, and message are required.',
      });
    }

    const referenceId = `KMRM-${Date.now().toString().slice(-6)}`;
    const newInquiry = {
      id: `inq-${Date.now()}`,
      referenceId,
      fullName: String(fullName).trim(),
      companyName: companyName ? String(companyName).trim() : undefined,
      email: String(email).trim(),
      phone: String(phone).trim(),
      inquiryType: String(inquiryType || 'General Inquiry').trim(),
      message: String(message).trim(),
      recipient: 'G Abbas Unar (Business Contact Representative)',
      createdAt: new Date().toISOString(),
    };

    inquiries.push(newInquiry);

    return res.status(201).json({
      success: true,
      referenceId,
      message: 'Inquiry successfully transmitted to G Abbas Unar.',
      inquiry: newInquiry,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
