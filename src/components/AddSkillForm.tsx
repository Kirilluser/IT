import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Upload } from 'lucide-react';
import { useState } from 'react';

interface AddSkillFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddSkillForm({ open, onOpenChange }: AddSkillFormProps) {
  const [formData, setFormData] = useState({
    skill: '',
    description: '',
    level: '',
    mode: '',
    city: '',
    contact: '',
    wantsToLearn: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" style={{
        backgroundColor: 'var(--theme-bg-card)',
        borderColor: 'var(--theme-border)'
      }}>
        <DialogHeader>
          <DialogTitle style={{ color: 'var(--theme-text)' }}>Offer Your Skill</DialogTitle>
          <DialogDescription style={{ color: 'var(--theme-text-light)' }}>
            Share what you can teach and what you'd like to learn in return.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Skill Name */}
          <div>
            <Label htmlFor="skill" style={{ color: 'var(--theme-text)' }}>
              What can you teach? *
            </Label>
            <Input
              id="skill"
              placeholder="e.g., Guitar, Python Programming, French..."
              value={formData.skill}
              onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
              required
              className="mt-2"
              style={{
                backgroundColor: 'var(--theme-bg)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" style={{ color: 'var(--theme-text)' }}>
              Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your experience, teaching style, and what students can expect..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="mt-2"
              style={{
                backgroundColor: 'var(--theme-bg)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            />
          </div>

          {/* Level and Mode */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="level" style={{ color: 'var(--theme-text)' }}>
                Your Level *
              </Label>
              <Select 
                value={formData.level} 
                onValueChange={(value) => setFormData({ ...formData, level: value })}
              >
                <SelectTrigger 
                  id="level"
                  className="mt-2"
                  style={{
                    backgroundColor: 'var(--theme-bg)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)'
                  }}
                >
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="mode" style={{ color: 'var(--theme-text)' }}>
                Teaching Mode *
              </Label>
              <Select 
                value={formData.mode} 
                onValueChange={(value) => setFormData({ ...formData, mode: value })}
              >
                <SelectTrigger 
                  id="mode"
                  className="mt-2"
                  style={{
                    backgroundColor: 'var(--theme-bg)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)'
                  }}
                >
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                  <SelectItem value="Both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city" style={{ color: 'var(--theme-text)' }}>
              City *
            </Label>
            <Input
              id="city"
              placeholder="e.g., New York, London, Berlin..."
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
              className="mt-2"
              style={{
                backgroundColor: 'var(--theme-bg)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            />
          </div>

          {/* What do you want to learn */}
          <div>
            <Label htmlFor="wantsToLearn" style={{ color: 'var(--theme-text)' }}>
              What do you want to learn? *
            </Label>
            <Input
              id="wantsToLearn"
              placeholder="e.g., Cooking, Photography, Spanish..."
              value={formData.wantsToLearn}
              onChange={(e) => setFormData({ ...formData, wantsToLearn: e.target.value })}
              required
              className="mt-2"
              style={{
                backgroundColor: 'var(--theme-bg)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            />
          </div>

          {/* Contact */}
          <div>
            <Label htmlFor="contact" style={{ color: 'var(--theme-text)' }}>
              Contact Email *
            </Label>
            <Input
              id="contact"
              type="email"
              placeholder="your.email@example.com"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
              className="mt-2"
              style={{
                backgroundColor: 'var(--theme-bg)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            />
          </div>

          {/* Image Upload */}
          <div>
            <Label style={{ color: 'var(--theme-text)' }}>
              Profile Image (Optional)
            </Label>
            <div 
              className="mt-2 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-opacity-50 transition-colors"
              style={{
                borderColor: 'var(--theme-border)',
                backgroundColor: 'var(--theme-bg)'
              }}
            >
              <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--theme-text-light)' }} />
              <p className="text-sm" style={{ color: 'var(--theme-text-light)' }}>
                Click to upload or drag and drop
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--theme-text-light)' }}>
                PNG, JPG up to 5MB
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'var(--theme-border)' }}>
            <Button 
              type="button"
              variant="outline"
              className="flex-1 rounded-full"
              onClick={() => onOpenChange(false)}
              style={{
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 rounded-full"
              style={{ 
                backgroundColor: 'var(--theme-accent)',
                color: 'white'
              }}
            >
              Submit Skill
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
