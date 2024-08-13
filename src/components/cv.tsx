import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";

// Styles
import '@/styles/cv.css';
import 'react-vertical-timeline-component/style.min.css';

function CV({ CVList }: { CVList: any[] }) {

  const vertical_timeline_element_base = 'vertical-timeline-element--';
  var vertical_timeline_element: string;

  return (
    <div suppressHydrationWarning className='cv'>
      <VerticalTimeline lineColor="#3e497a">

        {CVList.map((cv_item, index) => {
            
          vertical_timeline_element = vertical_timeline_element_base.concat(cv_item.type)
          const icon = (cv_item.type === 'work') ? (<MdOutlineWork />) : (<IoMdSchool />);
          const color = (cv_item.type === 'work') ? 'var(--work-icon-color)' : 'var(--school-icon-color)'; //'#3e497a' : '#e9d35b';

          const descriptionEntries = cv_item.description.map((entry: string, entryIndex:number) =>
            <li key={entryIndex}> {entry} </li>
          );

          return (
            <VerticalTimelineElement
              visible={true}
              key={index}
              className={vertical_timeline_element}
              date={cv_item.date}
              iconStyle={{ background: color}}
              icon={icon}
            >
              <h3 className="vertical-timeline-element-title dark:text-gray-200 text-gray-800"> {cv_item.title} </h3>
              <hr />
              <h4 className="vertical-timeline-element-subtitle dark:text-gray-400 text-gray-600 py-1"> {cv_item.subtitle + " @" + cv_item.institution} </h4>

              <ul className="list-disc py-1 px-5">
                { descriptionEntries }
              </ul>

            </VerticalTimelineElement>
          )
        })}

      </VerticalTimeline>
    </div>
  )
}

export default CV;