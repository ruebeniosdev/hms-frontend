import {
  CalendarCheck,
  Activity,
  Clock4,
  FileCheck,
  Users,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
    "Comprehensive patient records, medical history, and appointment scheduling.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment System",
    description:
    "Smart scheduling with automated reminders and calendar integration",
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
      "HIPAA-compliant security with role-based access control.",
  },
  {
    icon: Clock4,
    title: "24/7 Access",
    description:
      "Round-the-clock system availability for critical healthcare operations.",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-5xl px-6 py-12">
        <h2 className="max-w-lg font-semibold text-4xl tracking-[-0.03em] md:text-5xl md:leading-14">
         Smart Features
        </h2>
        <div className="mx-auto mt-6 grid w-full gap-12 md:mt-10 md:grid-cols-2">
          <div>
            <Accordion className="w-full" defaultValue="item-0" type="single">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  className="group/accordion-item data-[state=open]:border-primary data-[state=open]:border-b-2"
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="text-lg group-first/accordion-item:pt-0">
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6" />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] text-muted-foreground leading-relaxed">
                    {description}
                    <div className="mt-6 mb-2 aspect-video w-full rounded-xl bg-muted md:hidden">
                      <img
                        src="/images/doctor.jpg"
                        alt="Doctor preview"
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden h-full w-full rounded-xl bg-muted md:block">
            <img
              src="/images/doctor.jpg"
              alt="Features overview"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
