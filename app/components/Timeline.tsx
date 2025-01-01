export default function Timeline() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex justify-center mb-12">
        <span className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium">
          HOW IT WORKS
        </span>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 border-dashed border-gray-200 border-2" />

        {/* Vision Section */}
        <div className="relative mb-20">
          <div className="flex items-center">
            <div className="flex w-1/2 justify-end pr-8">
              <div className="max-w-xl">
                <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
                <p className="text-gray-600">
                  To drive demand for your brand with effective, well-crafted
                  advertising campaigns.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="h-4 w-4 rounded-full bg-blue-500" />
            </div>
            <div className="w-1/2 pl-8">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Middle Image Section */}
        <div className="relative mb-20">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-200" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="h-4 w-4 rounded-full bg-blue-500" />
            </div>
            <div className="w-1/2 pl-8">
              <div className="max-w-xl">
                <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
                <p className="text-gray-600">
                  To be a leading force in innovative advertising, empowering
                  brands to reach their full potential and make a lasting impact
                  in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
