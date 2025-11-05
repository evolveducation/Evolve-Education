import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2Icon, CheckCircle2Icon } from 'lucide-react';
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
        .from('feedback') // Make sure this is the name of your table in Supabase
        .insert([data]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 3000);

    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally, you can add state to display an error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16 lg:px-8">
        <div className="w-full max-w-2xl">
          <Card className="bg-card border-border">
            <CardHeader className="space-y-2 pb-6 sm:pb-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-black">
                Submit Your Feedback
              </CardTitle>
              <CardDescription className="text-center text-gray-300 text-sm sm:text-base">
                We value your input. Please share your thoughts with us.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2Icon className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" strokeWidth={1.5} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">Thank you for your feedback!</h3>
                  <p className="text-gray-300 text-center text-sm sm:text-base">
                    Your submission has been received successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="bg-neutral border-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200"
                      {...register('name', { required: 'Name is required' })}
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-neutral border-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-medium">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-neutral border-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                          message: 'Invalid phone number',
                        },
                      })}
                      aria-required="true"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* School/College Field */}
                  <div className="space-y-2">
                    <Label htmlFor="school" className="text-white font-medium">
                      School/College Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="school"
                      type="text"
                      placeholder="Enter your institution name"
                      className="bg-neutral border-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200"
                      {...register('school', { required: 'School/College name is required' })}
                      aria-required="true"
                      aria-invalid={errors.school ? 'true' : 'false'}
                    />
                    {errors.school && (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.school.message}
                      </p>
                    )}
                  </div>

                  {/* Feedback Field */}
                  <div className="space-y-2">
                    <Label htmlFor="feedback" className="text-white font-medium">
                      feedback <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="feedback"
                      placeholder="Share your thoughts, suggestions, or concerns..."
                      rows={6}
                      className="bg-neutral border-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200 resize-none"
                      {...register('feedback', {
                        required: 'Feedback is required',
                        minLength: {
                          value: 10,
                          message: 'Feedback must be at least 10 characters',
                        },
                      })}
                      aria-required="true"
                      aria-invalid={errors.feedback ? 'true' : 'false'}
                    />
                    {errors.feedback && (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.feedback.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base h-12 transition-all duration-200 ease-in"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2Icon className="mr-2 h-5 w-5 animate-spin" strokeWidth={1.5} />
                          Submitting...
                        </>
                      ) : (
                        'Submit Feedback'
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;