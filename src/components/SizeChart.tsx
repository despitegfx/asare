import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function SizeChart() {
  const sizes = [
    { size: 'XS', chest: '28-32', waist: '18-23', hips: '30-34' },
    { size: 'S', chest: '32-35', waist: '24-27', hips: '35-38' },
    { size: 'M', chest: '36-38', waist: '28-31', hips: '39-41' },
    { size: 'L', chest: '39-41', waist: '32-35', hips: '42-44' },
    { size: 'XL', chest: '42-44', waist: '36-39', hips: '45-47' },
    { size: 'XXL', chest: '45-48', waist: '40-43', hips: '48-51' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>size guide</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">size</th>
                <th className="text-left py-2">chest</th>
                <th className="text-left py-2">waist</th>
                <th className="text-left py-2">hips</th>
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
          <p>all measurements in inches</p>
          <p>for best fit, measure around the fullest part of your body</p>
        </div>
      </CardContent>
    </Card>
  );
}