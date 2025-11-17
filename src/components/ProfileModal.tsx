import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Mail, Calendar, Star, MessageCircle } from 'lucide-react';
import { SkillData } from './SkillCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileModalProps {
  skill: SkillData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockGallery = [
  "https://images.unsplash.com/photo-1512440731514-4de6f97c2d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsZWFybmluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2Mjk1NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjI4OTk5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758525863561-b33f7d5d97ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMG1lbnRvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2Mjk1NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
];

const mockTestimonials = [
  { name: "Alex K.", rating: 5, text: "Amazing teacher! Very patient and knowledgeable." },
  { name: "Maria S.", rating: 5, text: "Learned so much in just a few sessions. Highly recommend!" },
  { name: "John D.", rating: 4, text: "Great experience. Looking forward to more lessons." }
];

export function ProfileModal({ skill, open, onOpenChange }: ProfileModalProps) {
  if (!skill) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" style={{
        backgroundColor: 'var(--theme-bg-card)',
        borderColor: 'var(--theme-border)'
      }}>
        <DialogHeader>
          <DialogTitle style={{ color: 'var(--theme-text)' }}>Profile Details</DialogTitle>
          <DialogDescription style={{ color: 'var(--theme-text-light)' }}>
            View complete profile, skills, availability, and testimonials for {skill.name}
          </DialogDescription>
        </DialogHeader>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b" style={{
          borderColor: 'var(--theme-border)'
        }}>
          <Avatar className="w-24 h-24 border-4" style={{ borderColor: 'var(--theme-accent)' }}>
            <AvatarImage src={skill.avatar} alt={skill.name} />
            <AvatarFallback style={{ 
              backgroundColor: 'var(--theme-accent)',
              color: 'white'
            }}>
              {skill.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl mb-2" style={{ color: 'var(--theme-text)' }}>
              {skill.name}
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mb-3 text-sm" style={{ color: 'var(--theme-text-light)' }}>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{skill.city}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" style={{ color: 'var(--theme-accent)' }} />
                <span>4.8 (24 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Member since 2023</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <Badge style={{
                backgroundColor: 'var(--theme-secondary)',
                color: 'var(--theme-text)',
                border: 'none'
              }}>
                {skill.level}
              </Badge>
              <Badge style={{
                backgroundColor: 'var(--theme-accent)',
                color: 'white',
                border: 'none'
              }}>
                {skill.mode}
              </Badge>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="py-6 border-b" style={{ borderColor: 'var(--theme-border)' }}>
          <h3 className="mb-3" style={{ color: 'var(--theme-text)' }}>About</h3>
          <p style={{ color: 'var(--theme-text-light)', lineHeight: 1.7 }}>
            Passionate about sharing knowledge and learning new skills. I believe in the power of 
            community learning and mutual growth. Looking forward to exchanging skills and meeting 
            new people who share similar interests!
          </p>
        </div>

        {/* Skills */}
        <div className="py-6 border-b" style={{ borderColor: 'var(--theme-border)' }}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3" style={{ color: 'var(--theme-text)' }}>Can Teach</h3>
              <div className="flex flex-wrap gap-2">
                {skill.canTeach.map((s, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'var(--theme-accent)',
                      color: 'white'
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3" style={{ color: 'var(--theme-text)' }}>Wants to Learn</h3>
              <div className="flex flex-wrap gap-2">
                {skill.wantsToLearn.map((s, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: 'var(--theme-border)',
                      color: 'var(--theme-text-light)',
                      backgroundColor: 'var(--theme-bg)'
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="py-6 border-b" style={{ borderColor: 'var(--theme-border)' }}>
          <h3 className="mb-3" style={{ color: 'var(--theme-text)' }}>Gallery</h3>
          <div className="grid grid-cols-3 gap-3">
            {mockGallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback 
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="py-6 border-b" style={{ borderColor: 'var(--theme-border)' }}>
          <h3 className="mb-3" style={{ color: 'var(--theme-text)' }}>Availability</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {['Mon', 'Wed', 'Fri', 'Sat'].map((day) => (
              <div 
                key={day}
                className="px-3 py-2 rounded-lg text-center text-sm"
                style={{
                  backgroundColor: 'var(--theme-secondary)',
                  color: 'var(--theme-text)'
                }}
              >
                {day}
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm" style={{ color: 'var(--theme-text-light)' }}>
            Evenings: 6-9 PM • Weekends: Flexible
          </p>
        </div>

        {/* Testimonials */}
        <div className="py-6">
          <h3 className="mb-4" style={{ color: 'var(--theme-text)' }}>Testimonials</h3>
          <div className="space-y-4">
            {mockTestimonials.map((testimonial, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: 'var(--theme-bg)',
                  borderColor: 'var(--theme-border)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ color: 'var(--theme-text)' }}>{testimonial.name}</span>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-current" style={{ color: 'var(--theme-accent)' }} />
                    ))}
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--theme-text-light)' }}>
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'var(--theme-border)' }}>
          <Button 
            className="flex-1 rounded-full"
            style={{ 
              backgroundColor: 'var(--theme-accent)',
              color: 'white'
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Send Message
          </Button>
          <Button 
            variant="outline"
            className="flex-1 rounded-full"
            style={{
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-text)'
            }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
