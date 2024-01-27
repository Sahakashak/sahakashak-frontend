export default function AuthenticationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // bg-[url('https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]    bg-no-repeat bg-center bg-cover
    <section className="h-screen bg-primary	">
      <div className="flex justify-center items-center h-full ">{children}</div>
    </section>
  );
}
