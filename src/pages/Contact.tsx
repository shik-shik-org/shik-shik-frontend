import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/config/api';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: 'Името трябва да е поне 2 символа' })
    .max(80, { message: 'Името трябва да е максимум 80 символа' }),
  email: z.string()
    .trim()
    .email({ message: 'Невалиден имейл адрес' })
    .max(255, { message: 'Имейлът трябва да е максимум 255 символа' }),
  phone: z.string()
    .trim()
    .max(20, { message: 'Телефонът трябва да е максимум 20 символа' })
    .optional(),
  subject: z.string()
    .trim()
    .min(3, { message: 'Темата трябва да е поне 3 символа' })
    .max(200, { message: 'Темата трябва да е максимум 200 символа' })
    .optional(),
  message: z.string()
    .trim()
    .min(5, { message: 'Съобщението трябва да е поне 5 символа' })
    .max(2000, { message: 'Съобщението трябва да е максимум 2000 символа' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
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
        description: result.message || 'Вашето съобщение беше изпратено успешно.',
      });
      form.reset();
    } catch (error) {
      toast.error('Грешка', {
        description: 'Не успяхме да изпратим съобщението. Моля, опитайте отново.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Свържете се с нас
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Имате въпрос или предложение? Ще се радваме да чуем от вас!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Изпратете съобщение</CardTitle>
              <CardDescription>
                Попълнете формата и ще ви отговорим в най-кратък срок
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имейл *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+359 ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Тема</FormLabel>
                        <FormControl>
                          <Input placeholder="Тема на съобщението" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Съобщение *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Вашето съобщение..."
                            className="min-h-[150px] resize-none"
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
                      className="w-auto px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Изпращане...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Изпрати съобщение
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="text-2xl">Информация за контакт</CardTitle>
                <CardDescription>
                  Може да се свържете с нас директно
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
                    <a
                      href="tel:+359879339960"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +359 879 339 960
                    </a>
                    <br />
                    <a
                      href="tel:+359879339912"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +359 879 339 912
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Имейл</h3>
                    <a
                      href="mailto:info@shikshik.eu"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@shikshik.eu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Локации</h3>
                    <p className="text-muted-foreground">
                      София, Пазарджик, Монтана,
                      <br />
                      Благоевград, Разлог
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Работно време</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Понеделник - Петък</span>
                    <span>09:30 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Събота</span>
                    <span>10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Неделя</span>
                    <span>Затворено</span>
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-90">
                  * Работното време може да варира според локацията
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
