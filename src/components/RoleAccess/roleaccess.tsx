import {
    UserStar,
    User,
    CircleUserRound,
    Syringe,
    Stethoscope,
} from "lucide-react";

const features = [
  {
    icon: UserStar,
    title: "Admin",
    description:
      "Full system control and management.",
  },
  {
    icon: User,
    title: "Receptionist",
    description:
      "Appointment and registration management.",
  },
  {
    icon: Stethoscope,
    title: "Doctor",
    description:
      "Patient care and treatment management.",
  },
  {
    icon: CircleUserRound,
    title: "Nurse",
    description:
      "Patient monitoring and care coordination.",
  },
  {
    icon: Syringe,
    title: "Patient",
    description:
      "Personal health records and appointment management.",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div>
        <h2 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl">
          Role-Based Access
          <p className="mt-4 text-lg text-foreground/80">
          Secure Dashboard Tailored for Different Users in Healthcare Facility
            </p>
        </h2>
        <div className="mx-auto mt-10 grid max-w-(--breakpoint-lg) gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex flex-col rounded-xl border px-5 py-6"
              key={feature.title}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <feature.icon className="size-5" />
              </div>
              <span className="font-semibold text-lg">{feature.title}</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
