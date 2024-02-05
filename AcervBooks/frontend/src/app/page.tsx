import styles from './page.module.scss';
import { Metadata } from 'next';
import Image from 'next/image';
import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const metadata: Metadata = {
    title: 'Home',
}

export default function Home() {
    return (
        <div className={styles.screen}>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt='Logo AcervBooks' className={styles.logo} />

                <div className={styles.login}>
                    <form>
                        <Input placeholder='Matrícula' type='text' />
                        <Input placeholder='Senha' type='password' />

                        <Button
                            type="submit"
                            loading={false}
                        >
                            Acessar
                        </Button>
                    </form>
                </div>
            </div>
        </div>

    )
}
