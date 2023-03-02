import { Footer, FooterLink } from './PageFooter.styled';

export const PageFooter = () => {
    return (
        <Footer><p>{`\u00A9`} The site was created by <FooterLink href="https://github.com/khodetsky">Oleksandr Khodetsky</FooterLink> in 2023</p></Footer>
    )
}