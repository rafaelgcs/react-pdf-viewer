import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../components/MyDocument';

const MyPdfViewer = () => (
    <div style={{maxWidth: window.innerWidth-4, height: window.innerHeight-4, maxHeight: window.innerHeight-4}}>
        <PDFViewer width={'100%'} height={'100%'}>
            <MyDocument />
        </PDFViewer>
    </div>
);

export default MyPdfViewer;