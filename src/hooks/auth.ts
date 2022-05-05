// import { useState } from 'react'
let isLogin = false

const signIn = () => {
  isLogin = true
}
function useAuth() {
  return {
    signIn,
    isLogin,
  }
}

export { useAuth }
