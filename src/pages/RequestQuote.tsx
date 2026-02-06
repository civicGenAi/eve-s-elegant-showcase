import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/layout/Layout';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Upload, 
  Calendar, 
  MessageCircle,
  CheckCircle,
  FileText
} from 'lucide-react';
import heroFinished from '@/assets/hero-finished.jpg';

const furnitureTypes = [
  { id: 'dining-table', name: 'Dining Table', image: '/assets/lv/dining-table.jpg' },
  { id: 'coffee-table', name: 'Coffee Table', image: '/assets/lv/cof.jpg' },
  { id: 'chairs', name: 'Chairs', image: '/assets/lv/dining-chairs.jpg' },
  { id: 'sofa', name: 'Sofa', image: '/assets/lv/sofa.jpg' },
  { id: 'cabinet', name: 'Cabinet', image: '/assets/lv/cabinet.jpg' },
  { id: 'wardrobe', name: 'Wardrobe', image: '/assets/lv/wardrobe.jpg' },
  { id: 'bed', name: 'Bed Frame', image: '/assets/lv/bed.jpg' },
  { id: 'custom', name: 'Custom Design', image: '/assets/lv/livingr.jpg' },
];

const materials = ['Wood', 'Metal', 'Glass', 'Fabric', 'Leather'];
const budgetRanges = [
  'Under TZS 500,000',
  'TZS 500,000 - 1,000,000',
  'TZS 1,000,000 - 2,500,000',
  'TZS 2,500,000 - 5,000,000',
  'Above TZS 5,000,000',
];

const quoteSchema = z.object({
  furnitureTypes: z.array(z.string()).min(1, 'Please select at least one furniture type'),
  description: z.string().min(20, 'Please provide more details (at least 20 characters)').max(1000),
  dimensions: z.string().optional(),
  materials: z.array(z.string()).min(1, 'Please select at least one material'),
  budget: z.string().min(1, 'Please select a budget range'),
  deliveryDate: z.string().optional(),
  location: z.string().min(5, 'Please provide delivery location'),
  installationRequired: z.boolean(),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  preferredContact: z.enum(['phone', 'whatsapp', 'email']),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const steps = [
  { number: 1, title: 'Furniture Type' },
  { number: 2, title: 'Project Details' },
  { number: 3, title: 'Timeline & Location' },
  { number: 4, title: 'Contact Info' },
  { number: 5, title: 'Review & Submit' },
];

const RequestQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      furnitureTypes: [],
      materials: [],
      installationRequired: false,
      preferredContact: 'whatsapp',
    },
  });

  const watchedValues = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['furnitureTypes'];
        break;
      case 2:
        fieldsToValidate = ['description', 'materials', 'budget'];
        break;
      case 3:
        fieldsToValidate = ['location'];
        break;
      case 4:
        fieldsToValidate = ['name', 'phone', 'email', 'preferredContact'];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Quote submitted:', data);
    setReferenceNumber(`EVE-${Date.now().toString().slice(-6)}`);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const openWhatsApp = () => {
    const message = `Hi Eve Furniture! I just submitted a quote request (Ref: ${referenceNumber}). I'd like to discuss my project.`;
    window.open(`https://wa.me/255655588777?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-screen pt-32 pb-20 bg-secondary grain-overlay flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-muted-foreground mb-2">
                Your reference number is:
              </p>
              <p className="text-2xl font-bold text-accent mb-6">{referenceNumber}</p>
              
              <div className="bg-card rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <span className="text-muted-foreground">Our team reviews your requirements within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <span className="text-muted-foreground">We'll contact you to discuss details and provide a quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <span className="text-muted-foreground">Upon approval, we begin crafting your furniture</span>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="flex-1 py-4 rounded-xl bg-whatsapp text-whatsapp-foreground font-semibold hover:bg-whatsapp/90 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat with our team
                </button>
                <button className="flex-1 py-4 rounded-xl border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors flex items-center justify-center gap-2">
                  <FileText size={20} />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative pt-24 pb-12 min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroFinished} alt="Quote" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              Get Started
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request a Quote
            </h1>
            <p className="text-muted-foreground">
              Tell us about your project and we'll provide a custom quote tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-secondary border-b border-border sticky top-[72px] z-30">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
                    currentStep === step.number
                      ? 'bg-accent text-accent-foreground'
                      : currentStep > step.number
                      ? 'bg-success/20 text-success'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check size={16} />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </span>
                  )}
                  <span className="text-sm font-medium hidden sm:inline">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight size={16} className="text-muted-foreground mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-custom">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Furniture Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    What would you like us to create?
                  </h2>
                  <p className="text-muted-foreground mb-6">Select all that apply</p>

                  <Controller
                    name="furnitureTypes"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {furnitureTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => {
                              const current = field.value || [];
                              const updated = current.includes(type.id)
                                ? current.filter((t) => t !== type.id)
                                : [...current, type.id];
                              field.onChange(updated);
                            }}
                            className={`relative rounded-2xl border-2 overflow-hidden transition-all ${
                              field.value?.includes(type.id)
                                ? 'border-accent ring-2 ring-accent/30'
                                : 'border-border hover:border-accent/50'
                            }`}
                          >
                            <div className="aspect-square">
                              <img
                                src={type.image}
                                alt={type.name}
                                className="w-full h-full object-cover"
                              />
                              <div className={`absolute inset-0 transition-all ${
                                field.value?.includes(type.id)
                                  ? 'bg-accent/20'
                                  : 'bg-gradient-to-t from-foreground/70 to-transparent'
                              }`} />
                              {field.value?.includes(type.id) && (
                                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                  <Check size={14} className="text-accent-foreground" />
                                </div>
                              )}
                            </div>
                            <div className="p-3 bg-card">
                              <span className="font-medium text-foreground text-sm">{type.name}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  />
                  {errors.furnitureTypes && (
                    <p className="text-error text-sm">{errors.furnitureTypes.message}</p>
                  )}
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Tell us about your project
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Describe your vision *
                    </label>
                    <textarea
                      {...register('description')}
                      rows={5}
                      placeholder="Describe what you're looking for, including style preferences, colors, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                    <div className="flex justify-between mt-1">
                      {errors.description && (
                        <p className="text-error text-sm">{errors.description.message}</p>
                      )}
                      <span className="text-muted-foreground text-sm ml-auto">
                        {watchedValues.description?.length || 0}/1000
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Room Dimensions (optional)
                    </label>
                    <input
                      {...register('dimensions')}
                      type="text"
                      placeholder="e.g., 4m x 5m"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Preferred Materials *
                    </label>
                    <Controller
                      name="materials"
                      control={control}
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-3">
                          {materials.map((material) => (
                            <button
                              key={material}
                              type="button"
                              onClick={() => {
                                const current = field.value || [];
                                const updated = current.includes(material)
                                  ? current.filter((m) => m !== material)
                                  : [...current, material];
                                field.onChange(updated);
                              }}
                              className={`px-5 py-2 rounded-full border-2 transition-all ${
                                field.value?.includes(material)
                                  ? 'border-accent bg-accent text-accent-foreground'
                                  : 'border-border hover:border-accent/50'
                              }`}
                            >
                              {material}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                    {errors.materials && (
                      <p className="text-error text-sm mt-2">{errors.materials.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Budget Range *
                    </label>
                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {budgetRanges.map((range) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => field.onChange(range)}
                              className={`px-4 py-3 rounded-xl border-2 text-left transition-all ${
                                field.value === range
                                  ? 'border-accent bg-accent/10'
                                  : 'border-border hover:border-accent/50'
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                    {errors.budget && (
                      <p className="text-error text-sm mt-2">{errors.budget.message}</p>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50 flex items-center gap-4">
                    <Upload className="text-accent" size={24} />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Upload inspiration images</p>
                      <p className="text-muted-foreground text-sm">Drag & drop or click to upload (optional)</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Timeline & Location */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Timeline & Location
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      When do you need it? (optional)
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        {...register('deliveryDate')}
                        type="date"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Delivery Location *
                    </label>
                    <textarea
                      {...register('location')}
                      rows={3}
                      placeholder="Enter your full address..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                    {errors.location && (
                      <p className="text-error text-sm mt-1">{errors.location.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Do you need installation?
                    </label>
                    <Controller
                      name="installationRequired"
                      control={control}
                      render={({ field }) => (
                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => field.onChange(true)}
                            className={`flex-1 py-4 rounded-xl border-2 transition-all ${
                              field.value === true
                                ? 'border-accent bg-accent/10'
                                : 'border-border hover:border-accent/50'
                            }`}
                          >
                            Yes, please
                          </button>
                          <button
                            type="button"
                            onClick={() => field.onChange(false)}
                            className={`flex-1 py-4 rounded-xl border-2 transition-all ${
                              field.value === false
                                ? 'border-accent bg-accent/10'
                                : 'border-border hover:border-accent/50'
                            }`}
                          >
                            No, I'll handle it
                          </button>
                        </div>
                      )}
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Info */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                    {errors.name && (
                      <p className="text-error text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+255 XXX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-error text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Preferred Contact Method
                    </label>
                    <Controller
                      name="preferredContact"
                      control={control}
                      render={({ field }) => (
                        <div className="flex gap-3">
                          {[
                            { value: 'phone', label: 'Phone Call' },
                            { value: 'whatsapp', label: 'WhatsApp' },
                            { value: 'email', label: 'Email' },
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                                field.value === option.value
                                  ? 'border-accent bg-accent/10'
                                  : 'border-border hover:border-accent/50'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Review Your Request
                  </h2>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">Furniture Types</h3>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-accent text-sm hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <p className="text-muted-foreground">
                        {watchedValues.furnitureTypes
                          ?.map((t) => furnitureTypes.find((ft) => ft.id === t)?.name)
                          .join(', ') || 'None selected'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">Project Details</h3>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="text-accent text-sm hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {watchedValues.description?.substring(0, 100)}
                        {(watchedValues.description?.length || 0) > 100 && '...'}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Materials:</strong> {watchedValues.materials?.join(', ')}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Budget:</strong> {watchedValues.budget}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">Timeline & Location</h3>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="text-accent text-sm hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        <strong>Location:</strong> {watchedValues.location}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Installation:</strong>{' '}
                        {watchedValues.installationRequired ? 'Required' : 'Not required'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">Contact Information</h3>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="text-accent text-sm hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {watchedValues.name} • {watchedValues.phone} • {watchedValues.email}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Preferred contact:</strong> {watchedValues.preferredContact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <ChevronLeft size={18} />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
                >
                  Continue
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors disabled:opacity-70"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <Check size={18} />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Skip Option */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm mb-3">
                Prefer to chat directly?
              </p>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    `https://wa.me/255655588777?text=${encodeURIComponent("Hi Eve Furniture! I'd like to request a quote for custom furniture.")}`,
                    '_blank'
                  );
                }}
                className="inline-flex items-center gap-2 text-whatsapp font-semibold hover:underline"
              >
                <MessageCircle size={18} />
                Skip form - Chat on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default RequestQuote;
