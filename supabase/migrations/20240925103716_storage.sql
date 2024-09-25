CREATE TRIGGER development_on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION development.handle_new_user();

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION handle_new_user();


