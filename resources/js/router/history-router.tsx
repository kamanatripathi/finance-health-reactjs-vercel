import * as React from 'react'
import { Router, HistoryRouterProps} from 'react-router-dom'

const HistoryRouter = ({
  basename,
  children,
  history,
}: HistoryRouterProps) => {
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}

export default HistoryRouter;