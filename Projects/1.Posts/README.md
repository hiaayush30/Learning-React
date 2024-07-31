# const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;
## return passRegex.test(password);

## Explanation:
- (?=.*[a-z]) ensures at least one lowercase letter.<br>
- (?=.*[A-Z]) ensures at least one uppercase letter.<br>
- (?=.*[\W_]) ensures at least one special character (the \W matches any non-word character, and the _ is included for underscore).<br>
-  .+ ensures that there is at least one or more characters in total.

# const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
## return emailRegex.test(email);
## this regular expression checks that the email contains:

- One or more characters before the @.<br>
- One or more characters after the @ and before the ..<br>
- One or more characters after the ..
