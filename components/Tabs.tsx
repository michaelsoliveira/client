import { useState } from 'react';
import Login from './Login'
import { RegisterForm } from './RegisterForm'

const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500',
  errorMsg: 'text-red-500 text-sm',
}

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-green-600"
                    : "text-green-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Login
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-green-600"
                    : "text-green-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Cadastro
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Login />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <RegisterForm styles={styles} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs