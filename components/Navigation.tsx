const navigation = [
  { name: "Matchups", href: "/matchups", current: null },
  { name: "Tournament Tree", href: "/", current: null },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 border-b border-gray-400 bg-black">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-200 hover:bg-[#0f1519] hover:text-white",
                      "rounded-md px-3 py-2 text-lg font-semibold"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
