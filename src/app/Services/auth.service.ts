import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  ApiUrl:any="https://localhost:44300/api";
  PhotoUrl:any="https://localhost:44300/post/"

  //Post
  getAllPosts():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/Post");
  }

  deletePost(id:number){
    return this.http.delete(this.ApiUrl+"/Post/"+id,{responseType:'text'});
  }

  getSinglePostData(id:number):Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/Post/GetPostByID/id?id="+id);
  }


  uploadPhoto(val:any){
    return this.http.post(this.ApiUrl+"/Post/all_posts",val);
  }

  AddNewPost(v:any){
    return this.http.post(this.ApiUrl+"/Post",v,{responseType:'text'});
  }

  UpdatePost(v:any){
    return this.http.put(this.ApiUrl+"/Post",v,{responseType:"text"});
  }

  GetPostByCategory(id:number):Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/Post/GetPostByCategory/category?category="+id);
  }

  //Category

  getAllCategory():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/Category");
  }

  deleteCategory(id:any){
    return this.http.delete(this.ApiUrl+"/Category/"+id,{responseType:"text"});
  }

  getCategoryByID(id:number):Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/Category/get_category_by_id/cat_id?cat_id="+id);
  }

  addNewCategory(val:any){
    return this.http.post(this.ApiUrl+"/Category",val,{responseType:"text"});
  }

  EditCategory(val:any){
    return this.http.put(this.ApiUrl+"/Category",val,{responseType:"text"});
  }


  // Login

  getToken(){
    return localStorage.getItem('login-token');
  }


  setToken(val:any){
    return localStorage.setItem('login-token',val);
  }

  isLogeedIn(){
    return this.getToken()!=null;
  }

  logout(){
    localStorage.removeItem('login-token');
  }

  SignIn(email:string,password:string):Observable<any>{
    return this.http.get<any>("https://localhost:44300/api/Login/LoginSuccess",{params:{email,password}});
  }

  SignUp(val:any){
    return this.http.post(this.ApiUrl+"/Login",val);
  }

  //Contact Work
  AddNewContact(val:string){
    return this.http.post(this.ApiUrl+"/contact",val,{ responseType: 'text' });
  }


  getallcontact():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/Contact");
  }

  deleteContactMsg(id:any){
    return this.http.delete(this.ApiUrl+"/Contact/"+id,{ responseType: 'text' });
  }

  // Admin user

  getAllAdminUser():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/AdminUser");
  }

  deleteAdminUser(id:any){
    return this.http.delete(this.ApiUrl+"/AdminUser/"+id,{responseType:"text"});
  }

  AddNewUser(val:any){
    return this.http.post(this.ApiUrl+"/AdminUser",val,{responseType:"text"});
  }

  
  // un-stich Orders

  getAllunStich():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/WithoutStich");
  }

  DeleteunStich(id:any){
    return this.http.delete(this.ApiUrl+"/WithoutStich/"+id);
  }

  AddNewStichOrder(val:any){
    return this.http.post(this.ApiUrl+"/WithoutStich",val,{responseType:"text"});
  }

  getwithoutStichByID(id:number):Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/WithoutStich/"+id);
  }

  EditDoneW_S(s:any){
    return this.http.put(this.ApiUrl+"/WithoutStich",s);
  }
 

// Admin login
getAdminToken(){
  return localStorage.getItem('admin-login-token');
}


setAdminToken(val:any){
  return localStorage.setItem('admin-login-token',val);
}

isLogeedInAdmin(){
  return this.getAdminToken()!=null;
}

logoutAdmin(){
  localStorage.removeItem('admin-login-token');
}  


AdminSignIn(email:any,password:any):Observable<any>{
    return this.http.get<any>(this.ApiUrl+"/AdminUser/AdminLoginSuccess?email="+email+"&password="+password);
  }

    // Stich Orders

    getAllStich():Observable<any[]>{
      return this.http.get<any>(this.ApiUrl+"/StichOrder");
    }
  
    DeleteStich(id:any){
      return this.http.delete(this.ApiUrl+"/StichOrder/"+id);
    }
  
    AddNewSStichOrder(s:any) {
      return this.http.post(this.ApiUrl+"/StichOrder",s,{responseType:"text"});
    }
  
    // AddNewSStichOrder(s:any,p_id:number,qty:number) {
    //   return this.http.post(this.ApiUrl+"/StichOrder",{s,p_id,qty});
    // }
  
    getStichByID(id:number):Observable<any[]>{
      return this.http.get<any>(this.ApiUrl+"/StichOrder/"+id);
    }
  
    EditDone(s:any){
      return this.http.put(this.ApiUrl+"/StichOrder",s,{responseType:"text"});
    }
  

}


