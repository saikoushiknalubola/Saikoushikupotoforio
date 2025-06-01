
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Anchor, Users, Mail, MessageSquare, Sword, Crown, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  role: string;
  message: string;
}

const JoinCrewForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      role: '',
      message: ''
    }
  });

  const crewRoles = [
    { value: 'developer', label: 'Code Navigator', icon: Anchor },
    { value: 'designer', label: 'Visual Swordsman', icon: Sword },
    { value: 'manager', label: 'Crew Captain', icon: Crown },
    { value: 'marketer', label: 'Treasure Hunter', icon: Users },
    { value: 'other', label: 'Other Adventure', icon: MessageSquare }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "🏴‍☠️ Welcome to the Crew!",
      description: "Your application has been received! The captain will review it soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#121212] to-[#1a1a1a] relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Users className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Join My Crew
            </h2>
            <Users className="w-8 h-8 text-orange-500 scale-x-[-1]" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to set sail on the Grand Line of technology? Every great captain needs a legendary crew!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Card */}
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 border-orange-500/30 shadow-2xl shadow-orange-500/10 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent flex items-center justify-center space-x-2">
                <Anchor className="w-6 h-6 text-orange-500" />
                <span>Crew Application</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Every pirate needs a name!" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-300 font-semibold">Pirate Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your pirate name..."
                            className="bg-gray-800/50 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "We need your message bottle address!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid message bottle address!"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-300 font-semibold">Message Bottle Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your.email@grandline.com"
                            className="bg-gray-800/50 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Role Selection */}
                  <FormField
                    control={form.control}
                    name="role"
                    rules={{ required: "Choose your crew position!" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-300 font-semibold">Crew Position</FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {crewRoles.map((role) => (
                            <div
                              key={role.value}
                              onClick={() => field.onChange(role.value)}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                field.value === role.value
                                  ? 'border-orange-500 bg-orange-500/10 text-orange-300'
                                  : 'border-gray-600 bg-gray-800/30 text-gray-400 hover:border-orange-500/50 hover:bg-orange-500/5'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <role.icon className="w-5 h-5" />
                                <span className="font-semibold">{role.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Tell us about your adventure!" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-300 font-semibold">Your Adventure Story</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us about your skills, dreams, and why you want to join this crew..."
                            className="bg-gray-800/50 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 min-h-[120px] resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Setting Sail...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Join the Adventure!</span>
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Crew Benefits */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-300 flex items-center space-x-2">
                  <Crown className="w-5 h-5" />
                  <span>Crew Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Epic adventure in cutting-edge technology</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Share legendary treasures (knowledge & projects)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Sail the Grand Line of innovation together</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Build a legacy that changes the world</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-300 flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Direct Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>saikoushik42@gmail.com</span>
                </div>
                <p className="text-sm text-gray-400">
                  For urgent crew matters or immediate adventures, feel free to send a direct message bottle!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCrewForm;
