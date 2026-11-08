import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Inquiry {
  id: string;
  referenceId: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  recipient: string;
  createdAt: string;
}

const inquiries: Inquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      mill: 'Khan Muhammad Rice Mills',
      location: 'Sijawal, Tando Muhammad Khan, Sindh, Pakistan',
      timestamp: new Date().toISOString(),
    });
  });

  // Contact & Wholesale inquiries submission endpoint
  app.post('/api/inquiries', (req: Request, res: Response) => {
    const { fullName, companyName, email, phone, inquiryType, message } = req.body;

    if (!fullName || !phone || !email || !message) {
      return res.status(400).json({
        error: 'Missing required inquiry fields: fullName, phone, email, and message are required.',
      });
    }

    const referenceId = `KMRM-${Date.now().toString().slice(-6)}`;
    const newInquiry: Inquiry = {
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

    console.log(`[Khan Muhammad Rice Mills] New inquiry received [${referenceId}] from ${newInquiry.fullName} (${newInquiry.phone}) for ${newInquiry.inquiryType}`);

    return res.status(201).json({
      success: true,
      referenceId,
      message: 'Inquiry successfully transmitted to G Abbas Unar.',
      inquiry: newInquiry,
    });
  });

  // Query inquiries for administration
  app.get('/api/inquiries', (_req: Request, res: Response) => {
    res.json({
      count: inquiries.length,
      inquiries: inquiries.slice(-20),
    });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Khan Muhammad Rice Mills application running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
