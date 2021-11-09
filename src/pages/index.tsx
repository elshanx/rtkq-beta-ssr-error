import { GetServerSideProps, NextPage } from 'next'
import { getPokemon, getRunningOperationPromises, useGetPokemonQuery } from 'src/services/pokemon'
import { wrapper } from 'src/store'

const Home: NextPage = () => {
  // both of these work as intented
  const result = useGetPokemonQuery()

  return (
    <>
      <pre>
        <code>{JSON.stringify(result, null, 2)}</code>
      </pre>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(getPokemon.initiate())

    await Promise.all(getRunningOperationPromises())

    return {
      props: {},
    }
  },
)

export default Home
