
import Layout from "components/Layout/Layout";
import RequestSuccess from "components/Request/RequestSuccess";
import SubmitRequest from "components/Request/SubmitRequest";
import UserInfoRequest from "components/Request/UserInfoRequest";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setNeedRedirect } from "redux/reducers/homeReducer/homeReducer";
import routes from "utils/constants/routes";



const RequestPage = () => {
    //states
    const [link, setLink] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const { loggedIn, userDetail } = useSelector(state => state.user);
    const [success, setSuccess] = useState(false);

    //hooks
    const router = useRouter();
    const dispatch = useDispatch();

    //effects
    useEffect(() => {
        if (router.query.link) {
            setLink(router.query.link);
            handleSubmit();
        }
    }, [router.query]);

    //function
    const handleSubmit = () => {
        if (loggedIn) return setSubmitted(true);
        dispatch(setNeedRedirect(routes.request.path + "?link=" + link));
        router.push(routes.login.path);
    };



    return <Layout>
        <div className="relative w-full h-[80vh] min-h-[600px]">
            <Image
                src='/image/brands-bg.jpg'
                layout='fill'
                objectFit='cover'
                objectPosition='center center'
            />
            {!success && !submitted && <SubmitRequest submit={handleSubmit} link={link} setLink={setLink} />}
            {!success && submitted && <UserInfoRequest cancel={() => {
                setSubmitted(false);
                setLink("");
            }} ProductUrl={link} onRequestSent={() => setSuccess(true)} />}
            {success && <RequestSuccess />}
        </div>
    </Layout>;
};

export default RequestPage;