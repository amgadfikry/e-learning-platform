import {
  CookiesProvider, Router, Routes, Route, NotFound, ServerDown, Register, AuthUser, LandingPage, Support, Login,
  InstructorPage,
} from './import';

function App() {

  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<AuthUser> <LandingPage /> </AuthUser>}  ></Route>
            <Route exact path='/learner' element={<AuthUser> <LandingPage /> </AuthUser>}  ></Route>
            <Route exact path='/instructor/*' element={<AuthUser> <InstructorPage /> </AuthUser>}  ></Route>
            <Route exact path='/login' element={<AuthUser> <Login /> </AuthUser>}  ></Route>
            <Route exact path='/register' element={<AuthUser> <Register /> </AuthUser>}  ></Route>
            <Route exact path='/support' element={<Support />}  ></Route>
            <Route path='/server-down' element={<ServerDown />} ></Route>
            <Route path='*' element={<NotFound />} ></Route>
          </Routes>
        </Router>
      </CookiesProvider>
    </>
  )
}

export default App
