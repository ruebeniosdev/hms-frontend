import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookCheck,
  Activity,
  Users,
  FileCheck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import doctor from "@/assets/doctor.jpg";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Comprehensive patient records, medical history, and appointment scheduling.",
  },{
    icon: BookCheck,
    title: "Appointment System",
    description:
      "Smart scheduling with automated reminders and calender integration.",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description:
      "Real-time vital signs tracking and medical alerts.",
  },
  {
    icon: FileCheck,
    title: "Digital Records",
    description:
      "Secure electronic health records accessible anytime, anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description:
      "GHS, NHIA-compliant security with role-based access control.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description:
      "Round-the-clock system availability for critical healthcare operations.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] max-w-lg">
          Smart Features
        </h2>
        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group/accordion-item data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden group-first/accordion-item:pt-0">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          {/* <div className="hidden md:block w-full h-full bg-muted rounded-xl" /> */}
          <div className="hidden md:block w-full h-full rounded-xl overflow-hidden">
  <img 
    src={doctor}
    alt="Feature Illustration" 
    className="w-150 h-130 object-cover"
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
