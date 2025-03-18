import '../styles/NavigationHeader.css';

export const NavigationHeader: React.FC = () => {
    return (
        <header className='PageHeader_header'>
            <h1 className='PageHeader_title'>Todoアプリ</h1>
            <nav>
                <ul className='PageHeader_nav'>
                    <li>テストユーザー</li>
                    <li>ログアウト</li>
                </ul>
            </nav>
        </header>
    );
};