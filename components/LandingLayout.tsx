import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
}
