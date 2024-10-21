import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export default function Contato() {
  return (
    <div className="w-full py-14">
      <Card className="bg-slate-800 text-brand ">
        <CardHeader>
          <CardTitle className="text-4xl">Contato</CardTitle>
        </CardHeader>
        <CardContent className="m-auto w-4/6 gap-2">
          <Input placeholder="nome" />
          <Input placeholder="email" />
          <Input placeholder="phone" />
        </CardContent>
      </Card>
    </div>
  );
}
