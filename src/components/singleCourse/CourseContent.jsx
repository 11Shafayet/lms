import { Accordion } from 'flowbite-react';

/* eslint-disable react/prop-types */
const CourseContent = ({ topics, date, category }) => {
  return (
    <div className="my-6 md:my-8">
      <div className="border-2 border-opacity-55 rounded-md p-4 md:p-12">
        <div className="flex items-center justify-between gap-2 flex-col sm:flex-row">
          <h3 className="font-black text-2xl">Course Content</h3>
          <p className="opacity-50 text-sm">
            Course Start Date: {date}, Category: {category}
          </p>
        </div>

        <Accordion className="!border-0 mt-6">
          {/* odometer */}
          {topics.map((topic, i) => (
            <Accordion.Panel key={i} className="mt-2">
              <Accordion.Title className="text-lg font-bold bg-[#23ad9611] rounded-md !p-3">
                {topic.title}
              </Accordion.Title>
              <Accordion.Content>{topic.desc}</Accordion.Content>
              <span className="block h-3" />
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseContent;
