import { Card,CardContent } from "@/components/ui/card";

type servsType = {
  serviceName: string;
  path?: string;
  description?: string;
};

type servicesprops = {
  title: string;
  description: string;
};

export const Services = (props: servicesprops) => {
  let servs: servsType[] = [];

  // Adding elements to the servs array
  servs.push({
    serviceName: "jumpcuts",
    path: "/jumpcuts",
    description: "cuts the uneeded silence parts for your videos",
  });
  servs.push({
    serviceName: "subtitles",
    path: "/subtitles",
    description: "adds subtitles for your videos",
  });
  servs.push({
    serviceName: "gameplay",
    path: "/gameplay",
    description: "adds a gameplay footage for your videos",
  });
  servs.push({
    serviceName: "dont know",
    path: "/",
    description: "dont know placeholder",
  });

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
         
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {props.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {props.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                our services listing
              </h3>

              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
            <c
                {servs.map((e, index) => (
                  <div key={index} className="flex flex-col gap-8 items-center border-b pb-4">
                  

<div className="w-full p-3 text-center h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.serviceName}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.description}</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       {e.serviceName}
    </a>
    
</div>


                  </div>
              
              ))}
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};