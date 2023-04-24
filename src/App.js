import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {
  Navbar, Footer, Sidebar, Theme,
} from './components';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stack,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from './pages';

const App = () => {
  const activeMenu = false;
  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                style={{ background: 'blue', borderRadius: '50%' }}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element="frank" />
              <Route path="/ecommerce" element="ecommerce" />

              {/* pages  */}
              <Route path="/orders" element="orders" />
              <Route path="/employees" element="employees" />
              <Route path="/customers" element="customers" />

              {/* apps  */}
              <Route path="/kanban" element="kanban" />
              <Route path="/editor" element="editor" />
              <Route path="/calendar" element="calender" />
              <Route path="/color-picker" element="colorpicker" />

              {/* charts  */}
              <Route path="/line" element="line" />
              <Route path="/area" element="area" />
              <Route path="/bar" element="bar" />
              <Route path="/pie" element="pie" />
              <Route path="/financial" element="financial" />
              <Route path="/color-mapping" element="colormapping" />
              <Route path="/pyramid" element="pyramid" />
              <Route path="/stacked" element="stacked" />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
