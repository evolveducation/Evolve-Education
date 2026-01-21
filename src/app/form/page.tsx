import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2Icon, CheckCircle2Icon, Sparkles, MessageSquareHeart } from 'lucide-react';
import { supabase } from '@/supabaseClient';

interface FeedbackFormData {
  name: string;
  email: string;
  phone: string;
  school: string;
  feedback: string;
}

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormData>();

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('feedback')
        .insert([data]);

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 4000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert("Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-slate-200 flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

      <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-xl">
          <Card className="bg-black/40 border-white/10 backdrop-blur-xl shadow-2xl">
            <CardHeader className="space-y-4 pb-8 text-center">
              <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-2">
                <MessageSquareHeart className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Spill the Beans.
              </CardTitle>
              <CardDescription className="text-gray-400 text-base italic">
                "The good, the bad, and the brutally honest. We're all ears."
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in zoom-in-95 duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                    <CheckCircle2Icon className="w-20 h-20 text-green-400 relative z-10" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Message Received!</h3>
                  <p className="text-gray-400 text-center max-w-[280px]">
                    Thanks for being awesome. Your feedback helps us build something better.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-gray-300 ml-1 text-sm font-medium">
                      What should we call you? <span className="text-purple-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="e.g. Alex Grayson"
                      className="bg-white/5 border-white/10 text-black h-12 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all shadow-inner"
                      {...register('name', { required: 'We need to know who you are!' })}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1 ml-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-gray-300 ml-1 text-sm font-medium">
                        Your digital hideout (Email) <span className="text-purple-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-white/5 border-white/10 text-black h-12 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        {...register('email', {
                          required: 'Where should we reply?',
                          pattern: { value: /^\S+@\S+$/i, message: 'That email looks a bit funky' },
                        })}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1 ml-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-gray-300 ml-1 text-sm font-medium">
                        Your ring-a-ding <span className="text-purple-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone number"
                        className="bg-white/5 border-white/10 text-black h-12 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        {...register('phone', { required: 'Just in case we need to call!' })}
                      />
                      {errors.phone && <p className="text-xs text-red-400 mt-1 ml-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* School/College Field */}
                  <div className="space-y-1.5">
                    <Label htmlFor="school" className="text-gray-300 ml-1 text-sm font-medium">
                      Where do you learn your magic? (School/College) <span className="text-purple-400">*</span>
                    </Label>
                    <Input
                      id="school"
                      placeholder="The University of Life (or actual name)"
                      className="bg-white/5 border-white/10 text-white h-12 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                      {...register('school', { required: 'Your alma mater is required' })}
                    />
                    {errors.school && <p className="text-xs text-red-400 mt-1 ml-1">{errors.school.message}</p>}
                  </div>

                  {/* Feedback Field */}
                  <div className="space-y-1.5">
                    <Label htmlFor="feedback" className="text-gray-300 ml-1 text-sm font-medium">
                      The Deep Dive (Feedback) <span className="text-purple-400">*</span>
                    </Label>
                    <Textarea
                      id="feedback"
                      placeholder="Tell us everything. Don't hold back..."
                      rows={5}
                      className="bg-white/5 border-white/10 text-[#000000] focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none shadow-inner"
                      {...register('feedback', {
                        required: 'The floor is yours!',
                        minLength: { value: 10, message: 'Go on, tell us a bit more (min 10 chars)' },
                      })}
                    />
                    {errors.feedback && <p className="text-xs text-red-400 mt-1 ml-1">{errors.feedback.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black hover:bg-gray-200 font-bold text-base h-14 rounded-xl transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
                          Sending to the Cloud...
                        </>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Feedback <Sparkles className="ml-2 w-4 h-4 group-hover:animate-pulse" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
          <p className="text-center mt-8 text-gray-600 text-xs tracking-widest uppercase">
            Encrypted & Secure Submission
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;