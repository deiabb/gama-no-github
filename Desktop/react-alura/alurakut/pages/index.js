import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import{AlurakutMenu, OrkutNostalgicIconSet} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

//para importar os componentes individualmente usamos os bigodinhos
//pois se não usar, importamos os default
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} />
    </Box>
  )
}
/*da maneira como está, dá erro, pois a variável do usuario do github está para baixo
poderíamos só passar para cima, porém eles ensinaram as propriedades do react.
funciona como um argumento, coloca ali dentro do parênteses do profilesidebar
depois usamos dentro do src. E depois ali em baixo, dentro da tag profilesidebar
Eles dizem que ali em baixo, colocamos os bigodes, pq é uma variável se fosse string podia ser só aspas
*/ 

//como o alurakut menu faz parte de todas as paginas e não são dquela ali do main, não pdemos colocar dentro do main
//porém não conseguimos colocar dentro da mesma raiz duas tags html ai usa isso aqui <></>
export default function Home() {
  const usuarioGithub = 'deiabb';
  const pessoasFavoritas = [
    'juunegreiros',
    'peas',
    'omariosouto', 
    'rafaballerini', 
    'felipefialho'
  ] //precisamos mapear essa lista para mostrar eles ali na parte de baixo 
//o map transforma uma array, ele retorna os itens dela transformados
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/*daria para fazer assim <Box style="grid-area: profileArea;">*/}
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioGithub}/> {/*essevalor é preenchido nas propriedades lá em cima*/}
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length}) 
            </h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`http://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              }
              )}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box >
            Comunidades dev
          </Box>
        </div>
      
      </MainGrid>
    </>
  )
}



 