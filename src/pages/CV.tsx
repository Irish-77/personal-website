// Imports
import React from 'react';

// Components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

// Services
import { CVList } from '../services/CVList';

// Styles
import '../styles/CV.css';
import 'react-vertical-timeline-component/style.min.css';

function CV() {

  const vertical_timeline_element_base = 'vertical-timeline-element--';
  var vertical_timeline_element: string;

  return (
    <div className='cv'>
      <h1> My Curriculum Vitae </h1>
      <VerticalTimeline lineColor="#3e497a">

        {CVList.map((cv_item) => {

          vertical_timeline_element = vertical_timeline_element_base.concat(cv_item.type)
          const icon = (cv_item.type === 'work') ? (<WorkIcon />) : (<SchoolIcon />);
          const color = (cv_item.type === 'work') ? '#3e497a' : '#e9d35b';

          const descriptionEntries = cv_item.description.map((entry) =>
              <li> { entry } </li> 
          );

          return (
            <VerticalTimelineElement
              className={vertical_timeline_element}
              date={cv_item.date}
              iconStyle={{ background: color, color: "#fff" }}
              icon={icon}
            >
              <h3 className="vertical-timeline-element-title"> {cv_item.title} </h3>
              <hr />
              <h4 className="vertical-timeline-element-subtitle"> {cv_item.subtitle + " @" + cv_item.institution} </h4>

              <ul>
                { descriptionEntries }
              </ul>

            </VerticalTimelineElement>
          )
        })}

      </VerticalTimeline>
    </div>
  )
}

export default CV