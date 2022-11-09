const useStyle = () => {
    return ({
        FatSidePadding: {
            paddingLeft: '2rem',
            paddingRight: '2rem',
        },
        FatEndPadding: {
            paddingTop: '.8rem',
            paddingBottom: '.8rem',
        },
        NoShadow: {
            boxShadow: 'none'
        },
        YellowButtonContained: {
            color: 'black',
            fontWeight: 'bold',
            backgroundColor: '#F7E05E',
            '&:hover': {
                backgroundColor: '#E8D45F',
                boxShadow: 'none'
            },
            boxShadow: 'none'
        },
        BlueButtonContained: {
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: '#1B6C86',
            '&:hover': {
                backgroundColor: '#1F5F74',
                boxShadow: 'none'
            },
            boxShadow: 'none'
        },
        BlackButtonOutlined: {
            border: 'solid 1px rgba(0,0,0,0.5)',
            color: 'rgba(0,0,0,0.5)',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            '&:hover': {
                border: 'solid 1px rgba(0,0,0,0.5)',
                backgroundColor: 'rgba(0,0,0,0.04)',
                boxShadow: 'none'
            },
            boxShadow: 'none'
        },
        CenterContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        RowFlex: {
            display: 'flex',
        },
        ColumnFlex: {
            display: 'flex',
            flexDirection: 'column',
        },
        OverflowScroll: {
            maxHeight: '100%',
            overflow: 'scroll'
        },
        Subtitle: {
            fontFamily: 'Space Mono, monospace',
            color: '#5C5D60',
            textAlign: 'center',
        }
    });
};

export default useStyle;