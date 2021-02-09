import { useLoss } from './useLoss'
import './App.css'

const App = () => {
  const { won, loading } = useLoss()

  return (
    <main>
      {!loading && (
        <>
          <h2 className='text text-md'>Did the Canucks lose?</h2>
          <h1 className='text text-lg'>{won ? 'No' : 'Yes'}</h1>
        </>
      )}
    </main>
  )
}

export default App
