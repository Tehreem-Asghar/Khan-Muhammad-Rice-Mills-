export default function handler(req: any, res: any) {
  res.status(200).json({
    status: 'healthy',
    mill: 'Khan Muhammad Rice Mills',
    location: 'Sijawal, Tando Muhammad Khan, Sindh, Pakistan',
    timestamp: new Date().toISOString(),
  });
}
