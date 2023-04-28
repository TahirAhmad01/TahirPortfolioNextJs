import EditCard from '@/components/edit/editCard';
import EditPageLayout from '@/components/edit/editPageLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function index() {
  const [projectList, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/projectApi').then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <EditPageLayout>
      <EditCard title="Edit project">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  imge
                </th>
                <th scope="col" className="px-6 py-3">
                  details
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {projectList.map((project, idx) => {
                const { name, category, source, link, imageSrc } =
                  project || {};
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={idx}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      
                      <img src={imageSrc} alt={name} className="w-40 h-auto rounded-lg"/>
                    </th>
                    <td className="px-6 py-4">
                      <div className="font-bold dark:text-gray-100">{name}</div>

                      <div>{link}</div>
                      <div>{source}</div>
                      <div className="py-2">
                        {category.map((cat, idx) => (
                          <>
                            {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                            <div
                              className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 capitalize inline-block"
                              key={idx}
                            >
                              {cat}
                            </div>
                          </>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </EditCard>
    </EditPageLayout>
  );
}

export default index;
