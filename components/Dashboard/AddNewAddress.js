import { Alert, Form, Modal } from "antd";
import Button from "components/UI/Button/Button";
import DFormItem from "components/UI/DFormItem/DFormItem";
import DOption from "components/UI/DOption/DOption";
import DSelect from "components/UI/DSelect/DSelect";
import DTextArea from "components/UI/DTextArea/DTextArea";
import { useEffect } from "react";
import { useState } from "react";
import cities from 'utils/constants/cities.json';


const AddNewAddress = ({ show, close }) => {
    //states
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);
    const [address, setAddress] = useState("");
    const [warning, setWarning] = useState([]);

    //effects
    useEffect(() => {
        !selectedProvince && setSelectedCities(null);
    }, [selectedProvince]);

    //functions
    const handleSubmit = () => {
        const tempWarning = [];
        if (!selectedCities) tempWarning.push('شهر انتخاب نشده');
        if (!selectedProvince) tempWarning.push('استان انتخاب نشده');
        if (!address) tempWarning.push('آدرس وارد نشده');
        if (tempWarning.length > 0) return setWarning(tempWarning);


    };

    return <Modal visible={show} footer={false} title="آدرس جدید" onCancel={close}>
        <Form onFinish={handleSubmit} >
            <DFormItem label="استان" rules={[{ required: true, message: 'استان تعیین نشده' }]}>
                <DSelect allowClear placeholder="انتخاب استان" name="province" value={selectedProvince} onChange={e => {
                    setWarning([]);
                    setSelectedProvince(e);
                }} >
                    {cities.map(item => <DOption key={item.province} value={item.province}>{item.province}</DOption>)}
                </DSelect>
            </DFormItem>
            <DFormItem label="شهر"  >
                <DSelect allowClear placeholder="انتخاب شهر" name="city" value={selectedCities} onChange={e => {
                    setWarning([]);
                    setSelectedCities(e);
                }}>
                    {selectedProvince && cities.map(item => {
                        if (item.province === selectedProvince) return item.cities.map(city => <DOption key={city} value={city}>{city}</DOption>);
                    })}
                </DSelect>
            </DFormItem>
            <DFormItem label="آدرس"  >
                <DTextArea value={address} placeholder="آدرس دقیق" onChange={e => {
                    setWarning([]);
                    setAddress(e.target.value);
                }} />
            </DFormItem>
            {warning.length > 0 && <DFormItem label=" " colon={false}>
                <Alert message={warning.map(item => <p key={item}>{item}</p>)} type="warning" />
            </DFormItem>}
            <div className="flex justify-end">
                <Button text="ثبت" type="submit" />
            </div>
        </Form>
    </Modal>;
};

export default AddNewAddress;



