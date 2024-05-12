import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabsCategories = ({jobs}) => {
  return (
    <Tabs>
      <div className="container py-6 px-10 mx-auto">
        <h1 className="text-center font-semibold text-gray-800 capitalize lg:text-3xl">
          Browse Jobs by Categories
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas
          asperiores itaque vero fugit sit praesentium laboriosam dignissimos
          quis odit vel, mollitia quo consectetur aliquid, incidunt tenetur
          nihil ducimus aperiam temporibus accusantium ipsa esse quasi! Maxime,
          obcaecati aspernatur? Vitae, alias.
        </p>
        <div className="flex justify-center items-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {/* {
              jobs?.map(job => <JobCard key={job._id} job={job}></JobCard>)
            } */}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabsCategories;
