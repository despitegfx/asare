import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function SizeChart() {
  const sizes = [
    { size: 'XS', chest: '34-36', waist: '28-30', hips: '36-38' },
    { size: 'S', chest: '36-38', waist: '30-32', hips: '38-40' },
    { size: 'M', chest: '38-40', waist: '32-34', hips: '40-42' },
    { size: 'L', chest: '40-42', waist: '34-36', hips: '42-44' },
    { size: 'XL', chest: '42-44', waist: '36-38', hips: '44-46' },
    { size: 'XXL', chest: '44-46', waist: '38-40', hips: '46-48' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Size Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Size</th>
                <th className="text-left py-2">Chest</th>
                <th className="text-left py-2">Waist</th>
                <th className="text-left py-2">Hips</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size) => (
                <tr key={size.size} className="border-b">
                  <td className="py-2">{size.size}</td>
                  <td className="py-2 text-muted-foreground">{size.chest}"</td>
                  <td className="py-2 text-muted-foreground">{size.waist}"</td>
                  <td className="py-2 text-muted-foreground">{size.hips}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>All measurements in inches</p>
          <p>For best fit, measure around the fullest part of your body</p>
        </div>
      </CardContent>
    </Card>
  );
}