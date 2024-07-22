import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import {
  contactUsEmail,
} from "../../constants";

// Define a custom Terms Conditions component
export const TermsConditions = () => {
  return (
    <Box sx={{ bgcolor: "white", borderRadius: 4, p: 2, mt: 2, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ padding: "30px !important" }}>
          <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>Terms & Conditions</Typography>
          
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Introduction</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          Welcome to <Link href="https://solitairehomeconsultant.com/" color="secondary">https://solitairehomeconsultant.com/</Link>. These terms and conditions ("Terms") govern your use of the Website and the services provided by Solitaire Home Consultant  ("we," "us," or "our"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Use of the Website</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          You must be at least 18 years old to use this Website. You agree to use the Website only for lawful purposes and in accordance with these Terms. You are prohibited from using the Website to engage in any activity that could harm us or other users, or that is unlawful, harmful, or objectionable.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>User Accounts</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          To access certain features of the Website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Property Listings</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          If you submit a property listing to the Website, you represent and warrant that all information you provide is accurate, current, and complete. We reserve the right to remove or modify any listing that we believe is inaccurate, incomplete, or violates these Terms.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Intellectual Property</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          All content on the Website, including text, graphics, logos, images, and software, is the property of [Your Company Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or display any content from the Website without our prior written permission.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>User-Generated Content</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          You may submit content, such as reviews or comments, to the Website. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display your content. We reserve the right to monitor and remove any content that violates these Terms or is otherwise objectionable.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Privacy Policy</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          We collect and use personal information in accordance with our Privacy Policy. By using the Website, you consent to our collection and use of your personal information as described in the Privacy Policy.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Third-Party Links and Services</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          The Website may contain links to third-party websites or services. We are not responsible for the content or practices of these third-party sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Disclaimers and Limitation of Liability</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          The Website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted or error-free. In no event shall we be liable for any damages arising out of or in connection with your use of the Website.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Termination</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          We reserve the right to terminate or suspend your access to the Website at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users or us.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Governing Law</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          These Terms shall be governed by and construed in accordance with the laws of Punjab, without regard to its conflict of laws principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Punjab.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Changes to Terms</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          We may modify these Terms at any time. We will notify you of any changes by posting the updated Terms on the Website. Your continued use of the Website after any changes indicates your acceptance of the new Terms.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>Contact Information</Typography>
          <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 1 }}>
          If you have any questions about these Terms, please contact us at <Link href={`mailto:${contactUsEmail}?subject=${`Need more info`}&body=%0D%0A%0D%0A${window.location}`} color="secondary">{`${contactUsEmail}`}</Link> or <Link href={`https://solitairehomeconsultant.com/`} color="secondary">https://solitairehomeconsultant.com/</Link>.
          </Typography>

        </Grid>
      </Grid>
    </Box>
  );
};
