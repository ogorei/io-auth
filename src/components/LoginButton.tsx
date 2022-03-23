import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";
import { IonButton } from "@ionic/react";

const LoginButton: React.FC = () => {
  const { buildAuthorizeUrl } = useAuth0();

  const login = async () => {
    const url = await buildAuthorizeUrl();
    console.log(22,url);
    
    await Browser.open({ url });
    
  };

  return <IonButton onClick={login}>ログインする</IonButton>;
};

export default LoginButton;
