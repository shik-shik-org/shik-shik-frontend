import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Briefcase, Upload } from 'lucide-react';

export default function Careers() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявлението е изпратено успешно!",
        description: "Ще се свържем с вас скоро.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Briefcase className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Кариери
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Присъединете се към нашия екип! Попълнете формуляра и ние ще се свържем с вас.
            </p>
          </div>

          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Форма за кандидатстване</CardTitle>
              <CardDescription>
                Моля, попълнете всички полета по-долу
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Име *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder="Вашето име" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Вашата фамилия" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Имейл *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="example@email.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      placeholder="+359 ..." 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Позиция *</Label>
                  <Select name="position" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Изберете позиция" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Продавач-консултант</SelectItem>
                      <SelectItem value="manager">Мениджър магазин</SelectItem>
                      <SelectItem value="warehouse">Складов работник</SelectItem>
                      <SelectItem value="driver">Шофьор</SelectItem>
                      <SelectItem value="other">Друга позиция</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Предпочитан град *</Label>
                  <Select name="city" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Изберете град" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sofia">София</SelectItem>
                      <SelectItem value="pazardjik">Пазарджик</SelectItem>
                      <SelectItem value="montana">Монтана</SelectItem>
                      <SelectItem value="blagoevgrad">Благоевград</SelectItem>
                      <SelectItem value="razlog">Разлог</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">CV (PDF, DOC, DOCX) *</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="cv" 
                      name="cv"
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      required 
                      className="cursor-pointer"
                    />
                    <Upload className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Мотивационно писмо</Label>
                  <Textarea 
                    id="coverLetter" 
                    name="coverLetter"
                    placeholder="Разкажете ни защо искате да работите при нас..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Изпращане...' : 'Изпрати заявление'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Защо да работите при нас?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Конкурентно възнаграждение</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Възможности за кариерно развитие</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Приятна работна среда</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Обучения и професионално развитие</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
