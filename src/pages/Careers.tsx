import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/config/api';
import { Loader2 } from 'lucide-react';
import logo from '@/assets/logo.png';

const careerSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, { message: 'Името трябва да е поне 2 символа' })
    .max(80, { message: 'Името трябва да е максимум 80 символа' }),
  lastName: z.string()
    .trim()
    .min(2, { message: 'Фамилията трябва да е поне 2 символа' })
    .max(80, { message: 'Фамилията трябва да е максимум 80 символа' }),
  phone: z.string()
    .trim()
    .min(8, { message: 'Телефонът трябва да е поне 8 символа' })
    .max(20, { message: 'Телефонът трябва да е максимум 20 символа' }),
  position: z.string()
    .min(1, { message: 'Моля, изберете позиция' }),
  email: z.string()
    .trim()
    .email({ message: 'Невалиден имейл адрес' })
    .max(255, { message: 'Имейлът трябва да е максимум 255 символа' })
    .optional()
    .or(z.literal('')),
  city: z.string().optional(),
  coverLetter: z.string()
    .trim()
    .max(2000, { message: 'Мотивационното писмо трябва да е максимум 2000 символа' })
    .optional()
    .or(z.literal('')),
});

type CareerFormData = z.infer<typeof careerSchema>;

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      position: '',
      email: '',
      city: '',
      coverLetter: '',
    },
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/careers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Неуспешно изпращане');
      }

      const result = await response.json();
      toast.success('Успешно!', {
        description: result.message || 'Вашето заявление беше изпратено успешно.',
      });
      form.reset();
    } catch (error) {
      toast.error('Грешка', {
        description: 'Не успяхме да изпратим заявлението. Моля, опитайте отново.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={logo} 
                  alt="Шик Шик" 
                  className="w-16 h-16 object-contain"
                />
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Име *</FormLabel>
                          <FormControl>
                            <Input placeholder="Вашето име" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Фамилия *</FormLabel>
                          <FormControl>
                            <Input placeholder="Вашата фамилия" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+359 ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Позиция *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Изберете позиция" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sales">Продавач-консултант</SelectItem>
                            <SelectItem value="warehouse">Складов работник</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имейл (по избор)</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Предпочитан град (по избор)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Изберете град" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sofia">София</SelectItem>
                            <SelectItem value="pazardjik">Пазарджик</SelectItem>
                            <SelectItem value="montana">Монтана</SelectItem>
                            <SelectItem value="blagoevgrad">Благоевград</SelectItem>
                            <SelectItem value="razlog">Разлог</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Мотивационно писмо (по избор)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Разкажете ни защо искате да работите при нас..."
                            rows={6}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="w-auto px-8 h-11"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Изпращане...
                        </>
                      ) : (
                        'Изпрати заявление'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
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
                  <span>Приятна работна среда</span>
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
