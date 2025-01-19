import ListItem from './ListItem'
import './HomePage.css'
import './HomePage2.css'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import {
  faCodeMerge,
  faLaptopCode,
  faChevronDown,
  faAnglesDown,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSearchPage } from 'hooks/useSearchPage'
import { useEffect } from 'react'
import { user } from 'types/user'

function HomePage() {
  const history = [
    {
      role: 'Recent projects',
      startDate: 'See our latest project releases',
    },
    {
      role: 'Popular projects',
      startDate: 'Contribute to our most popular projects',
    },
    {
      role: 'Under-supported projects',
      startDate: 'Shining a Light on Projects that Need Support',
    },
  ]

  const { items: users } = useSearchPage<user>({ indexName: 'users', pageTitle: 'OWASP Users' })
  console.log('kaam', users)

  return (
    <>
      <div className="homeParent flex flex-col">
        <section className="z-10 mx-36 mt-24 flex w-4/5 flex-wrap rounded-xl bg-gray-800 p-20">
          <div className="content">
            <div className="iframeContainer">
              <iframe
                src="https://en.wikipedia.org/wiki/OWASP"
                style={{
                  height: '600px',
                  width: '360px',
                }}
              ></iframe>
            </div>
            <ul className="aboutItems">
              <ListItem
                definiton={`Here's the detail commands to set up project on your local, and start your open source journey`}
                heading={`Project Setup`}
                redirect={`https://github.com/OWASP/Nest/blob/main/CONTRIBUTING.md`}
                iconName={faLaptopCode}
              ></ListItem>
              <ListItem
                definiton={`Please Go through our Contributor Covenant Code of Conduct and guidelines and try to stick to them.`}
                heading={`Contribution Guidelines`}
                redirect={`https://github.com/OWASP/Nest/blob/main/CODE_OF_CONDUCT.md`}
                iconName={faCodeMerge}
              ></ListItem>
              <ListItem
                definiton={`Join our slack channel for community discussions and ease of information flow`}
                heading={`Slack community`}
                redirect={`https://owasp.slack.com/archives/project-nest`}
                iconName={faSlack}
              ></ListItem>
            </ul>
          </div>
        </section>

        <section className="mt-12 flex justify-evenly">
          <div className="content">
            <ul className="history">
              {history.map((historyItem, id) => {
                return (
                  <li key={id} className="historyItem">
                    <FontAwesomeIcon icon={faCode} />
                    <div className="historyItemDetails flex justify-between gap-160">
                      <div>
                        <h3>{`${historyItem.role}`}</h3>
                        <p>{`${historyItem.startDate}`}</p>
                      </div>
                      <div className="arrowIconContainer text-2xl">
                        <FontAwesomeIcon icon={faAnglesDown} className="fa-sharp-duotone" />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <div className="max-h-94 contributorsDiv mb-8 ml-24 mt-11 overflow-y-auto rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-semibold">Recently joined Contributors</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {users.map((contributor, index) => (
              <a
                href={`https://github.com/${contributor.login ? contributor.login : contributor.name}`}
                target="_blank"
                className=""
              >
                <div key={index} className="flex items-center">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.name || contributor.login}
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{contributor.name || contributor.login}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {contributor.contributions_count} contributions
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
